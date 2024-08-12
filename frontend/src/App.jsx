import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Banner";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qalyefmhqlurvjwjoekg.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhbHllZm1ocWx1cnZqd2pvZWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM0NzExNzIsImV4cCI6MjAzOTA0NzE3Mn0.4owlTRsqJaXeOilUv5EGkH2WsjUHPUR__g8xPE7aCbk";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function App() {
  // const title = "TUF compitetion 2024";
  // const description = 'This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next. This is long description Join us in Denver from June 7 – 9 to see what’s coming next.';
  // const linkText = "Register now";
  // const link = "https://takeuforward.org/about-us";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkText, setLinkText] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    getBanner();
  }, []);

  async function getBanner() {
    const { data, error } = await supabase.from("banners").select("*").limit(1);

    if (error) {
      console.error("Error fetching banner:", error);
      return;
    }

    if (data) {
      // console.log("Banner data:", data);
      const { title, description, link_text, link } = data[0];
      setTitle(title);
      setDescription(description);
      setLinkText(link_text);
      setLink(link);
    }
  }

  return (
    <>
      <Banner
        title={title}
        description={description}
        linkText={linkText}
        link={link}
      ></Banner>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
