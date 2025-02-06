"use client";

import EmailTableItems from "@/components/AdminComponents/EmailTableItems";
import EmailListSkeleton from "@/components/skeleton/EmailListSkeleton";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
function Page() {
  const [emails, setEmails] = useState([]);

  // Fetch the emails
  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    if (!response.data.success) {
      toast.error(response.data.msg);
      return;
    }
    setEmails(response.data.emails);
  };

  // Handle delete
  const deleteEmail = async (emailId) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: emailId,
      },
    });

    if (!response.data.success) {
      toast.error("Something went wrong");
      return;
    }

    toast.success(response.data.msg);
    return;
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscription</h1>
      <div className="relative h-[80vh] max-w-[1000px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-500 bg-gray-50 text-left uppercase">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Email Subscription
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {emails ? (
              emails.map((email) => (
                <EmailTableItems
                  key={email._id}
                  email={email}
                  handler={deleteEmail}
                />
              ))
            ) : (
              <EmailListSkeleton />
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
