"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import Container from "@/components/ui/Container";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white ">
      <Container>
        {" "}
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Admin Panel</h1>
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 md:mt-0 mt-4 space-y-4 md:space-y-0 transition-all duration-300 
        ${isOpen ? "block" : "hidden md:flex"}`}
        >
          <li>
            <a
              href="/admin/dashboard"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/admin/settings"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="/admin/users"
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              Users
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default AdminNav;
