"use client"

import Link from "next/link"
import { Laptop2 } from "lucide-react"

const navigation = {
  services: [
    { name: "企業サイト制作", href: "#services" },
    { name: "ECサイト制作", href: "#services" },
    { name: "Webアプリ開発", href: "#services" },
    { name: "サイトリニューアル", href: "#services" },
    { name: "SEOサービス", href: "#services" },
  ],
  company: [
    { name: "会社概要", href: "#" },
    { name: "チーム", href: "#team" },
    { name: "採用情報", href: "#" },
    { name: "ブログ", href: "#" },
  ],
  legal: [
    { name: "プライバシーポリシー", href: "#" },
    { name: "利用規約", href: "#" },
    { name: "Cookie ポリシー", href: "#" },
  ],
  social: [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Laptop2 className="h-6 w-6" />
              <span className="font-bold text-2xl">WebPro</span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              私たちは、ビジネスの目標達成と顧客とのつながりを支援する、美しく高性能なWebサイトを制作します。
            </p>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} WebPro. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">サービス</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">会社情報</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">法的情報</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-lg mt-8 mb-4">フォローする</h3>
            <ul className="space-y-2">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}