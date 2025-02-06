function EmailTableItems({ email, handler }) {
  const emailData = new Date(email?.date);

  return (
    <tr className="bg-white border-b text-left">
      <th scope="row" className="px-6 py-4">
        {email?.email ? email.email : "No Email Found"}
      </th>
      <td className="px-6 py-4">
        {email?.date ? emailData.toDateString() : "20/04/2025"}
      </td>
      <td
        className="px-6 py-4 cursor-pointer text-lg"
        onClick={() => handler(email._id)}
      >
        x
      </td>
    </tr>
  );
}

export default EmailTableItems;
