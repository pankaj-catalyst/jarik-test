import SearchInput from "@/components/SearchInput";
import UserList from "@/components/UserList";
import useLocale from "@/hooks/useLocales";
import useUsers from "@/hooks/useUsers";
import { useState, useMemo } from "react";

export default function EnPage() {
  const t = useLocale("fr");
  const { users, loading, error, refetch } = useUsers();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  const filtered = useMemo(()=>{
    const q = query.toLowerCase().trim();
    return users.filter(u=>u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q));
  },[users, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">{t.title}</h1>
      <SearchInput value={query} onChange={setQuery} placeholder={t.searchPlaceholder} />

      {loading && <p>{t.loading}</p>}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={refetch}>{t.retry}</button>
        </div>
      )}

      <UserList users={visible} />

      <div className="flex justify-between mt-4">
        <button onClick={() => setPage(p => Math.max(1, p-1))} disabled={page<=1}>{t.prev}</button>
        <span>{page}/{totalPages}</span>
        <button onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page>=totalPages}>{t.next}</button>
      </div>
    </div>
  );
}
