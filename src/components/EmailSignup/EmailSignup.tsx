import Link from "next/link";
import { useState } from "react";

const EmailSignup: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<string>(""); // New state for feedback
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(""); // Reset status
    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/email_subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Subscription successful!"); // Success feedback
      } else {
        setStatus(data.message || "Subscription failed."); // Failure feedback
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again."); // Generic error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div
      id="signup-section"
      className="relative isolate overflow-hidden sm:py-24 lg:py-48"
    >
      <div className="mx-auto w-full md:w-10/12 px-10 py-20 lg:px-8">
        <div className="mx-auto max-w-xl lg:max-w-2xl text-center border-2 border-white rounded-3xl backdrop-blur-xl p-10 lg:p-16">
          <h2 className="text-3xl tracking-tight text-white sm:text-4xl font-BerkeleyMonoBold text-balance">
            Be the first to know
          </h2>
          <p className="mt-4 text-md leading-8 text-white font-BerkeleyMono text-balance">
            Sign up to our mailing list and get updates as they happen.
          </p>
          <form id="signup-form" onSubmit={handleSubmit}>
            <div className="max-w-md gap-x-4 mx-auto mt-5 grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="min-w-0 w-full flex-auto rounded-full border-1 focus:border-0 bg-white px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-xs sm:leading-6 font-BerkeleyMono"
                  id="firstName"
                  value={firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFirstName(e.target.value)
                  }
                  disabled={loading}
                />
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 mt-6 md:mt-0">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="min-w-0 w-full flex-auto rounded-full border-1 focus:border-0 bg-white px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-xs sm:leading-6 font-BerkeleyMono"
                  value={lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLastName(e.target.value)
                  }
                  disabled={loading}
                />
              </div>
            </div>
            <div className="mt-6 flex max-w-md gap-x-4 mx-auto">
              <input
                id="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                name="email"
                type="email"
                required
                placeholder="Email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-full border-1 focus:border-0 bg-white px-3.5 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6 font-BerkeleyMono"
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="mt-6 flex-none rounded-full bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 font-BerkeleyMono"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {status && (
            <div
              className={`mt-4 text-sm ${
                status.includes("success")
                  ? "text-green-600"
                  : status.includes("already a list member")
                  ? "text-blue-600"
                  : "text-red-600"
              }`}
            >
              {status.includes("success")
                ? "Thanks for signing up!"
                : status.includes("already a list member")
                ? "Awesome, we've already got you on our list!"
                : "Something went wrong."}
            </div>
          )}
          <div className="pt-6 text-xs text-white font-sans text-balance">
            By signing up, you agree to Homie Lab&apos;s{" "}
            <Link className="underline" href="/privacy">
              Privacy Policy
            </Link>
            . For more info, contact us at{" "}
            <Link className="underline" href="mailto:support@homielab.tech">
              support@homielab.tech
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSignup;
