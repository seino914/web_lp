"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Rocket, Zap, TrendingUp, BarChart, Globe, Shield } from "lucide-react"
import SectionWrapper from "@/components/section-wrapper"

const benefitsData = [
  {
    title: "信頼性の確立",
    description: "プロフェッショナルなWebサイトは、潜在顧客との信頼関係を構築します。消費者の75%がWebサイトのデザインで企業の信頼性を判断しています。",
    icon: Shield,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "24時間営業",
    description: "Webサイトは24時間365日稼働し、実店舗が閉まっている時でも情報提供や見込み客の獲得が可能です。",
    icon: Globe,
    color: "bg-green-500/10 text-green-500", 
  },
  {
    title: "競争優位性",
    description: "時代遅れのWebサイトや、サイトを持たない競合他社と差別化できます。消費者の30%がWebサイトのない企業との取引を避けています。",
    icon: TrendingUp,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "データ分析",
    description: "Webサイトの分析を通じて顧客の行動を把握し、より良いビジネス判断を行うことができます。",
    icon: BarChart,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "費用対効果の高いマーケティング",
    description: "Webサイトは従来の広告手法と比べて、はるかに低コストで見込み客を獲得できる効果的なマーケティングツールです。",
    icon: Zap,
    color: "bg-teal-500/10 text-teal-500",
  },
  {
    title: "ビジネスの成長",
    description: "プロフェッショナルなWebサイトを持つ企業は、持たない企業と比べて2-3倍の成長率を示しています。地理的な制限を超えてビジネスを拡大できます。",
    icon: Rocket,
    color: "bg-red-500/10 text-red-500",
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <SectionWrapper id="benefits" className="bg-gray-50 dark:bg-gray-900">
      <div ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">なぜあなたのビジネスに<span className="text-primary bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Webサイト</span>が必要なのか</h2>
          <p className="text-lg text-muted-foreground">
            現代のデジタル経済において、Webサイトは単なる選択肢ではなく、ビジネスの成功に不可欠な要素です。その理由をご説明します：
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${benefit.color}`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg font-medium mb-2">ビジネスを時代に取り残さないために</p>
          <p className="text-muted-foreground mb-8">ビジネスの購買判断の93%が検索エンジンでの検索から始まります。</p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}