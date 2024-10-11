import Head from "next/head";
import "antd/dist/reset.css";  // Reset Ant Design styles
import SignInForm from "../../SignInForm";  // Import the sign-in form

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sign In | Case Solver AI</title>
        <meta name="description" content="Sign in to Case Solver AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f0f2f5" }}>
        <SignInForm />
      </main>
    </div>
  );
}
