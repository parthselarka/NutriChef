import { supabase } from "./supabase";

/**
 * Add an email to the waitlist
 * @param {string} email - The email address to add
 * @param {string} source - The source of the signup ('hero' or 'footer')
 * @param {string} userAgent - User agent string (optional)
 * @param {string} ipAddress - IP address (optional)
 * @returns {Promise<{success: boolean, error?: string, data?: any}>}
 */
export async function addToWaitlist(
  email,
  source = "unknown",
  userAgent = "",
  ipAddress = ""
) {
  try {
    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("waitlist")
      .select("id, email")
      .eq("email", email.toLowerCase())
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      // PGRST116 is "not found" error, which is fine
      throw checkError;
    }

    if (existingUser) {
      return {
        success: false,
        error: "This email is already on the waitlist!",
      };
    }

    // Generate unsubscribe token
    const unsubscribeToken = crypto.randomUUID();

    // Add to waitlist
    const { data, error } = await supabase
      .from("waitlist")
      .insert([
        {
          email: email.toLowerCase().trim(),
          source: source,
          user_agent: userAgent,
          ip_address: ipAddress,
          unsubscribe_token: unsubscribeToken,
          is_subscribed: true,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return {
      success: true,
      data: data[0],
    };
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return {
      success: false,
      error: error.message || "Failed to join waitlist. Please try again.",
    };
  }
}

/**
 * Get waitlist statistics
 * @returns {Promise<{count: number, error?: string}>}
 */
export async function getWaitlistStats() {
  try {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .eq("is_subscribed", true);

    if (error) {
      throw error;
    }

    return { count: count || 0 };
  } catch (error) {
    console.error("Error getting waitlist stats:", error);
    return { count: 0, error: error.message };
  }
}

/**
 * Unsubscribe from waitlist
 * @param {string} token - The unsubscribe token
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function unsubscribeFromWaitlist(token) {
  try {
    const { data, error } = await supabase
      .from("waitlist")
      .update({ is_subscribed: false })
      .eq("unsubscribe_token", token)
      .select();

    if (error) {
      throw error;
    }

    if (data.length === 0) {
      return {
        success: false,
        error: "Invalid unsubscribe link",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error unsubscribing:", error);
    return {
      success: false,
      error: error.message || "Failed to unsubscribe",
    };
  }
}
