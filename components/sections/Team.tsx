"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { GithubIcon, LinkedinIcon, CodeIcon } from "lucide-react"
import SectionWrapper from "@/components/section-wrapper"

const teamData = [
  {
    name: "山田 太郎",
    role: "リードエンジニア",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "エンタープライズWebアプリケーション開発に10年以上の経験を持つフルスタックエンジニア。React、Node.js、クラウドアーキテクチャのエキスパート。",
    links: {
      github: "#",
      linkedin: "#",
      portfolio: "#",
    }
  },
  {
    name: "佐藤 美咲",
    role: "UX/UIデザイナー",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "認知心理学のバックグラウンドを持つ受賞歴のあるデザイナー。ユーザーエンゲージメントとコンバージョン率を高める直感的なインターフェースを設計。",
    links: {
      github: "#",
      linkedin: "#",
      portfolio: "#",
    }
  },
  {
    name: "田中 健一",
    role: "バックエンドエンジニア",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "高性能でスケーラブルなバックエンドソリューションを専門とするシステムアーキテクト。データベース最適化とAPI設計のエキスパート。",
    links: {
      github: "#",
      linkedin: "#",
      portfolio: "#",
    }
  },
  {
    name: "鈴木 優子",
    role: "プロジェクトマネージャー",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "複雑なWebプロジェクトを8年以上にわたって納期通りに納品してきた認定プロジェクトマネージャー。アジャイル手法のエキスパート。",
    links: {
      github: "#",
      linkedin: "#",
      portfolio: "#",
    }
  },
]

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <SectionWrapper id="team" className="bg-gray-50 dark:bg-gray-900">
      <div ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">熟練の<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">エンジニア</span>チーム</h2>
          <p className="text-lg text-muted-foreground">
            私たちは単なる開発者ではありません。技術とビジネス目標の両方を理解する経験豊富なエンジニアです。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamData.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-card border border-border rounded-xl overflow-hidden group"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex gap-4">
                    <a href={member.links.github} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a href={member.links.linkedin} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a href={member.links.portfolio} className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                      <CodeIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}