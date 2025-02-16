"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserCircleIcon from "@heroicons/react/24/outline/UserCircleIcon";
import ShowPath from "./ShowPath";
import Nav from "./Nav";
import { useNavStore } from "@/store/navStore";
import { getStores } from "@/lib/utils/navhelper";

export default function Header() {
  const { store, setStore } = useNavStore();

  return (
    <div className="mb-5">
      <div className="bg-slate-900 text-slate-50 p-2 text-center">
        Bandeau
      </div>
      <div className="flex justify-between items-center p-10">
        <div>
          <Link href="/">
            <Image
              src="/logo_S&B.png"
              alt="logo"
              height={75}
              width={200}
            />
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Rechercher..."
            className="p-2 w-64 border rounded"
          />
          <span>🔍</span>
        </div>
        <div className=" border flex p-2">
          
      <button className="border m-2"><Link href="/dev">Dev</Link></button>
      <button className="border m-2"><Link href="/admin">Admin</Link></button>
        </div>
        <div className="flex items-center space-x-4">
          <span>🛒</span>
          <UserCircleIcon className="h-8 w-8" />
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        {getStores().map((s) => (
          <button
            key={s.id}
            onClick={() => setStore(s.title)}
            className={`px-4 py-2 rounded-sm ${
              store === s.title ? "bg-blue-500" : "bg-gray-100 hover:bg-gray-300"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>
      <Nav />
      
      {/*
      <div style={{ width: "100%", height: "200px", position: "relative" }}>
      
        <Image
          src="/Capture d’écran 2025-02-12 205854.png"
          alt="Header Image"
          layout="fill"
          objectFit="cover"
        />
        
      </div> */}
    </div>
  );
}
