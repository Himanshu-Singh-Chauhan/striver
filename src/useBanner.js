import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qalyefmhqlurvjwjoekg.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhbHllZm1ocWx1cnZqd2pvZWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0NzExNzIsImV4cCI6MjAzOTA0NzE3Mn0.4owlTRsqJaXeOilUv5EGkH2WsjUHPUR__g8xPE7aCbk";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// export { supabase };

export function useBanner() {
  const [bannerData, setBannerData] = useState({
    isEnabled: false,
    title: "",
    description: "",
    linkText: "",
    link: "",
  });

  useEffect(() => {
    getBanner();
  }, []);

  async function getBanner() {
    const { data, error } = await supabase.from("banners").select("*").limit(1);

    if (error) {
      console.error("Error fetching banner:", error);
      return;
    }

    if (data && data.length > 0) {
      const { title, description, link_text, link, is_active, event_date } = data[0];
      // const targetDate = formatDate(event_date);
      // console.log("targetDate", targetDate);
      console.log(event_date)
      setBannerData({
        isEnabled: is_active,
        title,
        description,
        linkText: link_text,
        link,
        eventDate: event_date,
      });
    }
  }

  return bannerData;
}
