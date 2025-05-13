"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionWrapper from "@/components/section-wrapper"
import Link from "next/link"

const pricingData = [
  {
    title: "ベーシック",
    price: "15",
    description: "これからオンラインビジネスを始める小規模企業向け",
    features: [
      "プロフェッショナルなレスポンシブデザイン",
      "最大5ページ",
      "問い合わせフォーム",
      "基本的なSEO対策",
      "スマートフォン対応",
      "SNS連携",
    ],
    popular: false,
    callToAction: "今すぐ始める",
  },
  {
    title: "プロフェッショナル",
    price: "35",
    description: "成長中の企業向け総合ソリューション",
    features: [
      "ベーシックプランの全機能に加えて：",
      "最大10ページ",
      "コンテンツ管理システム",
      "ブログ機能",
      "高度なSEOパッケージ",
      "アナリティクス連携",
      "メールニュースレター設定",
      "1時間のトレーニング",
    ],
    popular: true,
    callToAction: "おすすめ",
  },
  {
    title: "エンタープライズ",
    price: "要相談",
    description: "複雑なビジネスニーズに対応するカスタムソリューション",
    features: [
      "プロフェッショナルプランの全機能に加えて：",
      "ページ数無制限",
      "ECサイト機能",
      "カスタムインタラクティブ機能",
      "データベース連携",
      "ユーザーアカウント管理",
      "高度なセキュリティ機能",
      "優先サポート",
    ],
    popular: false,
    callToAction: "お問い合わせ",
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <SectionWrapper id="pricing" className="bg-gray-50 dark:bg-gray-900">
      <div ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">明確な<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">料金</span>プラン</h2>
          <p className="text-lg text-muted-foreground">
            あなたのビジネスニーズに合わせた、透明性のある料金プランをご用意しています。追加料金は一切ありません。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) =>
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`
                bg-card border rounded-xl overflow-hidden relative ${
                  plan.popular
                    ? "border-primary/30 ring-1 ring-primary/20 shadow-lg shadow-primary/10"
                    : "border-border shadow-sm"
                }
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                  人気プラン
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                <div className="mb-4">
                  {plan.price === "要相談" ? (
                    <span className="text-3xl font-bold">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">万円〜</span>
                    </>
                  )}
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="#contact">{plan.callToAction}</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="mt-12 text-center bg-primary/5 border border-primary/10 rounded-lg p-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-2">カスタムソリューションをお探しですか？</h3>
          <p className="text-muted-foreground mb-4">
            あなたの具体的なビジネスニーズと予算に合わせたカスタムWebソリューションを提供します。
          </p>
          <Button asChild size="lg" variant="default">
            <Link href="#contact">カスタム見積りを依頼する</Link>
          </Button>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}