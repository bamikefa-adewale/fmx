"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

export const useSearch = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, setSearch] = useState(searchParams.get("searchTerm") || "");
  const [value] = useDebounce(search, 1000); // Debounce search input

  // Sync state with URL changes
  useEffect(() => {
    setSearch(searchParams.get("searchTerm") || "");
  }, [searchParams]);

  // Update URL when debounced search changes
  useEffect(() => {
    if (value !== undefined) {
      const params = new URLSearchParams();
      if (value) params.set("searchTerm", value);
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [value, pathname, router]);

  return { search, setSearch };
};
