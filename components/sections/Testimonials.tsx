"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import SectionWrapper from "@/components/section-wrapper"

const testimonials = [
  {
    name: "田中 一郎",
    company: "地元レストラン経営者",
    image: "https://images.pexels.com/photos/6497119/pexels-photo-6497119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "新しいWebサイトを立ち上げてから、予約数が45%増加しました。オンライン注文システムはテイクアウト事業に革新をもたらしました。",
    rating: 5,
  },
  {
    name: "山本 美香",
    company: "ブティック店主",
    image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "ECサイトのおかげで、全国のお客様に商品をお届けできるようになりました。地域限定だった店舗が、今では全国展開しています。投資は何倍もの価値がありました。",
    rating: 5,
  },
  {
    name: "佐藤 健一",
    company: "専門サービス企業",
    image: "https://images.pexels.com/photos/16470071/pexels-photo-16470071/free-photo-of-close-up-of-man-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "新しいWebサイトへの投資を躊躇していましたが、これまでで最高のマーケティング判断でした。サイトを通じて獲得した見込み客の成約率は40%も高くなっています。",
    rating: 5,
  },
  {
    name: "鈴木 真理",
    company: "健康・美容スタジオ",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Webサイトに組み込まれたオンライン予約システムにより、管理業務が70%削減されました。お客様からも予約管理が簡単だと好評です。",
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  return (
    <SectionWrapper id="testimonials">
      <div ref={ref}>
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4"><span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">お客様</span>の声</h2>
          <p className="text-lg text-muted-foreground">
            プロフェッショナルなWebサイトに投資して成功を収めた実際のビジネスオーナーの声をご紹介します。
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                    <div className="flex items-start mb-4">
                      <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-muted-foreground flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}