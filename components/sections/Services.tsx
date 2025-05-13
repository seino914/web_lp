"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionWrapper from "@/components/section-wrapper";
import Link from "next/link";

const serviceItems = [
  {
    id: "business",
    label: "企業サイト",
    title: "プロフェッショナルな企業サイト",
    description:
      "あなたのビジネスの価値提案とサービスを効果的に紹介する、プロフェッショナルなWebサイトを制作します。",
    features: [
      "ブランドに合わせたカスタムデザイン",
      "スマートフォン対応レイアウト",
      "検索エンジン最適化（SEO）",
      "問い合わせフォームと地図の設置",
      "営業時間とサービス情報の掲載",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: "ecommerce",
    label: "ECサイト",
    title: "ECサイトソリューション",
    description:
      "安全で使いやすいECサイトで、オンラインでの商品販売を実現します。",
    features: [
      "商品カタログと在庫管理",
      "セキュアな決済処理",
      "注文管理と顧客アカウント",
      "商品検索と絞り込み機能",
      "スマートフォン対応のショッピング体験",
    ],
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "custom",
    label: "Webアプリ",
    title: "カスタムWebアプリケーション",
    description:
      "あなたのビジネスプロセスに特化したWebアプリケーションで、業務効率を向上させます。",
    features: [
      "ユーザー認証と権限管理",
      "データの可視化とレポート機能",
      "既存システムとの連携",
      "ワークフロー自動化",
      "リアルタイム更新と通知",
    ],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <SectionWrapper id="services">
      <div ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            あなたのニーズに合わせた
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Webソリューション
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ビジネスの目標とターゲット層に合わせた、美しく機能的なWebサイトやWebアプリケーションを制作します。
          </p>
        </motion.div>

        <Tabs defaultValue="business" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {serviceItems.map((item) => (
              <TabsTrigger key={item.id} value={item.id}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceItems.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild size="lg">
                    <Link href="#contact">お見積りを依頼する</Link>
                  </Button>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </SectionWrapper>
  );
}
