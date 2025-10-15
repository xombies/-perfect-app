import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Instagram, Scale, FileText, ShieldCheck } from "lucide-react";

export default function LegalMemoryHome() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900 font-serif">
      <header className="w-full text-center py-12 border-b border-gray-300 bg-white shadow-sm">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-800"
        >
          Legal Memory
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          A Law Based Civilian Framework for Moral Memory Integrity and Authorship Sovereignty.
        </p>
      </header>

      <section className="flex flex-col md:flex-row justify-center gap-6 mt-12 mb-12">
        <Button
          asChild
          className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 text-lg rounded-xl shadow-lg"
        >
          <a href="https://chatgpt.com/g/g-688381d39f688191b8c508d918ef8b2b-legal-memory" target="_blank" rel="noopener noreferrer">
            <FileText className="inline mr-2 w-5 h-5" /> Open Legal Memory GPT
          </a>
        </Button>

        <Button
          asChild
          variant="outline"
          className="border-blue-700 text-blue-800 hover:bg-blue-50 px-10 py-4 text-lg rounded-xl flex items-center gap-2"
        >
          <a href="https://www.instagram.com/legalmemoryai" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-5 h-5 text-pink-500" /> Follow on Instagram
          </a>
        </Button>
      </section>

      <section className="w-full max-w-5xl bg-white border border-gray-300 shadow-md rounded-2xl p-10 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-800 flex items-center justify-center gap-2">
          <ShieldCheck className="w-7 h-7 text-blue-700" /> Tamper Proof Framework
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Legal Memory operates under strict forensic standards. Each record is AES-256 encrypted, timestamped, and DOI verified, ensuring any alteration creates a verifiable hash mismatch. The architecture follows a dual record structure: one factual, one moral. Together, they establish chain of custody integrity, balancing evidence and ethical authorship.
        </p>

        <h3 className="text-2xl font-semibold text-blue-700 mb-3 flex items-center gap-2">
          <Scale className="w-6 h-6 text-blue-700" /> Why Boundaries Matter
        </h3>
        <p className="text-lg leading-relaxed text-gray-700">
          Boundaries define lawful scope and prevent reinterpretation. In Legal Memory, each entry declares intent, alignment, and ownership, neutralizing passive judgment and institutional distortion. This ensures clarity, context, and civilian sovereignty remain intact under all interpretive pressures.
        </p>
      </section>

      <footer className="bg-blue-900 text-blue-100 w-full text-center py-6 border-t border-blue-700">
        <p className="text-sm">© 2025 LegalMemory.com All Rights Reserved</p>
        <p className="text-xs mt-1">☩10.5281/zenodo.17357682DOI∴2025 [Encrypted: AES-256]</p>
      </footer>
    </main>
  );
}