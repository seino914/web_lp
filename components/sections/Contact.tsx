"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import SectionWrapper from "@/components/section-wrapper"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [submitted, setSubmitted] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 実際の実装では、ここでフォームの送信処理を行います
    setSubmitted(true)
  }
  
  return (
    <SectionWrapper id="contact">
      <div ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Webサイトで<span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">ビジネスを変革</span>しませんか？</h2>
          <p className="text-lg text-muted-foreground">
            プロジェクトについて、熟練エンジニアチームにご相談ください。
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">お問い合わせ先</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">お電話</p>
                    <p className="font-medium">03-1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">メール</p>
                    <p className="font-medium">contact@webproexperts.jp</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">所在地</p>
                    <p className="font-medium">〒100-0001 東京都千代田区1-1-1</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">ご相談後の流れ</h3>
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center font-semibold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium">ヒアリング</h4>
                    <p className="text-muted-foreground text-sm">ビジネスのニーズと目標についてお伺いし、プロジェクトの要件を把握します。</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center font-semibold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium">提案書の作成</h4>
                    <p className="text-muted-foreground text-sm">ご要望に基づいて、スケジュールと料金を含む詳細な提案書を作成します。</p>
                  </div>
                </li>
                
                <li className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center font-semibold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium">制作開始</h4>
                    <p className="text-muted-foreground text-sm">ご承認いただいた後、熟練エンジニアチームが制作を開始します。</p>
                  </div>
                </li>
              </ol>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 bg-card border border-border rounded-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-300" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">ありがとうございます！</h3>
                <p className="text-muted-foreground mb-6">
                  お問い合わせを受け付けました。24時間以内にご連絡させていただきます。
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                >
                  別のお問い合わせをする
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-xl font-semibold mb-6">無料相談を予約する</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      お名前
                    </label>
                    <Input id="name" placeholder="山田 太郎" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      メールアドレス
                    </label>
                    <Input id="email" type="email" placeholder="yamada@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      電話番号
                    </label>
                    <Input id="phone" placeholder="03-1234-5678" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      予算
                    </label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="予算範囲を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1000-3000">10万円 - 30万円</SelectItem>
                        <SelectItem value="3000-5000">30万円 - 50万円</SelectItem>
                        <SelectItem value="5000-10000">50万円 - 100万円</SelectItem>
                        <SelectItem value="10000+">100万円以上</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    ご希望のサービス
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="サービスを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">企業サイト制作</SelectItem>
                      <SelectItem value="ecommerce">ECサイト制作</SelectItem>
                      <SelectItem value="webapp">Webアプリケーション開発</SelectItem>
                      <SelectItem value="redesign">サイトリニューアル</SelectItem>
                      <SelectItem value="seo">SEOサービス</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    プロジェクトの詳細
                  </label>
                  <Textarea
                    id="message"
                    placeholder="ビジネスの概要やプロジェクトの要件についてお聞かせください..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full md:w-auto" size="lg">
                  <span>送信する</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}