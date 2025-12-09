import { User } from "@/hooks/useUsers";
import React from "react";

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {
  if (!users.length)
    return (
      <div className="py-6 text-gray-500 text-center italic">No results found.</div>
    );

  return (
    <ul className="mt-4 grid gap-4 sm:grid-cols-2">
      {users.map((user) => (
        <li
          key={user.id}
          className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col justify-between"
        >
          <div>
            <h2 className="font-semibold text-gray-800 text-lg">{user.name}</h2>
            <a
              href={`mailto:${user.email}`}
              className="text-sm text-blue-600 hover:underline break-words"
            >
              {user.email}
            </a>
          </div>

          <div className="mt-3 space-y-1 text-gray-600 text-sm">
            {user.company?.name && (
              <div className="flex items-center gap-1">
                <span>{user.company.name}</span>
              </div>
            )}
            {user.phone && (
              <div className="flex items-center gap-1">
                <span>{user.phone}</span>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
