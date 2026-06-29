import { Button } from '@/components/ui/button';

export default function Home() {
  const GUMROAD_URL = 'https://gumroad.com/l/gaza-land'; // Replace with actual URL
  const SAMPLE_PDF_URL = '#'; // Replace with actual sample PDF URL

  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F5F1E8]/95 backdrop-blur border-b border-[#D8CDBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#B45B5B] rounded-full flex items-center justify-center">
              <span className="text-[#FFF8F2] text-xs font-bold">G</span>
            </div>
            <span className="text-xs font-semibold text-[#2E2A28]">Gaza Land</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#inside-book" className="text-xs text-[#6F655C] hover:text-[#B45B5B] transition">Preview</a>
            <Button asChild size="sm" className="bg-[#B86161] hover:bg-[#A55353] text-[#FFF8F2]">
              <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">Buy</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-10 pb-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-5 lg:space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-[#2E2A28] leading-tight">
                  For three years, I wrote what the cameras could not carry.
                </h1>
                <p className="text-base text-[#B45B5B] font-arabic">
                  لثلاث سنوات، كتبت ما لم تستطع الكاميرات حمله.
                </p>
              </div>

              {/* Mobile-only: book cover right after headline */}
              <div className="block lg:hidden flex justify-center">
                <div className="relative mx-auto max-w-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B45B5B]/15 to-transparent rounded-lg blur-2xl"></div>
                  <img
                    src="/images/book-cover-main.png"
                    alt="A Father's Notebook from Gaza"
                    className="w-full rounded-lg shadow-xl relative z-10 object-contain"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#B45B5B] text-[#FFF8F2] px-3 py-1.5 rounded text-xs font-semibold">
                    Digital PDF Edition
                  </div>
                </div>
              </div>

              <p className="text-lg text-[#6F655C] leading-relaxed">
                A bilingual digital literary notebook about family, memory, displacement, and dignity — written from inside nearly three years of lived experience.
              </p>

              <div className="pt-1 space-y-4">
                <div>
                  <p className="text-sm text-[#6F655C]">Arabic & English · PDF Edition · Instant Access</p>
                  <p className="text-3xl font-bold text-[#B45B5B] mt-2">$29.99</p>
                </div>

                {/* Desktop CTA — unchanged */}
                <div className="hidden sm:flex flex-row gap-3">
                  <Button asChild size="lg" className="bg-[#B86161] hover:bg-[#A55353] text-[#FFF8F2]">
                    <a href="#inside-book">View Preview</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-[#B45B5B] text-[#B45B5B] hover:bg-[#EAE2D3]">
                    <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">Get the Digital Edition — $29.99</a>
                  </Button>
                </div>

                {/* Mobile CTA — primary buy button first, view preview secondary */}
                <div className="flex sm:hidden flex-col gap-3">
                  <Button asChild size="lg" className="bg-[#B86161] hover:bg-[#A55353] text-[#FFF8F2] w-full">
                    <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">Get the Digital Edition — $29.99</a>
                  </Button>
                  <a href="#inside-book" className="text-center text-sm text-[#6F655C] hover:text-[#B45B5B] underline underline-offset-2 transition">
                    View Preview
                  </a>
                </div>

                <p className="text-xs text-[#6F655C]">
                  Secure checkout via Gumroad · Instant PDF access
                </p>
                <p className="text-xs text-[#6F655C] font-arabic">
                  وصول فوري · دفع آمن عبر Gumroad
                </p>
              </div>
            </div>

            {/* Right Column - Book Cover (desktop only) */}
            <div className="hidden lg:flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B45B5B]/15 to-transparent rounded-lg blur-2xl"></div>
                <img
                  src="/images/book-cover-main.png"
                  alt="A Father's Notebook from Gaza"
                  className="w-full max-w-sm rounded-lg shadow-xl relative z-10 object-contain"
                />
                <div className="absolute bottom-4 left-4 bg-[#B45B5B] text-[#FFF8F2] px-3 py-1.5 rounded text-xs font-semibold">
                  Digital PDF Edition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Value Section */}
      <section className="py-16 bg-[#EAE2D3] border-y border-[#D8CDBE]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-3xl font-serif font-bold text-[#2E2A28]">
            Not headlines. A family story from the inside.
          </h2>
          <p className="text-sm text-[#B45B5B] font-arabic">
            ليست عناوين أخبار. إنها قصة عائلة كُتبت من الداخل.
          </p>
          <p className="text-lg text-[#6F655C] leading-relaxed">
            This is not a report, not a news summary, and not a plea. It is a father's notebook — written through the daily life of a family whose world changed suddenly.
          </p>
        </div>
      </section>

      {/* Inside the Book Section - Hook-Based Preview */}
      <section id="inside-book" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#2E2A28] mb-2">
              A Few Lines From Inside
            </h2>
            <p className="text-sm text-[#B45B5B] font-arabic mb-4">
              بضعة أسطر من الداخل
            </p>
            <p className="text-lg text-[#6F655C]">
              A limited preview of the voice and emotional structure of the book — without giving away the full reading experience.
            </p>
            <p className="text-sm text-[#6F655C] font-arabic mt-2">
              لمحة محدودة من صوت الكتاب وبنيته الشعورية، دون أن تغني عن قراءة النسخة الكاملة.
            </p>
          </div>

          {/* Editorial Preview Cards - Book Pages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1 */}
            <div className="rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src="/images/card-1.webp" alt="The Rain, the Father, and the Book" className="w-full h-auto" />
            </div>

            {/* Card 2 */}
            <div className="rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src="/images/card-2.webp" alt="A Child's Wish in the Tent" className="w-full h-auto" />
            </div>

            {/* Card 3 */}
            <div className="rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src="/images/card-3.webp" alt="Children and Women Before the Bakery" className="w-full h-auto" />
            </div>

            {/* Card 4 */}
            <div className="rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src="/images/card-4.webp" alt="Life of Survival, Not Adaptation" className="w-full h-auto" />
            </div>
          </div>

          {/* Note Below Cards */}
          <div className="text-center space-y-4">
            <p className="text-sm text-[#6F655C] italic">
              These are only short glimpses from the book. The full digital edition includes 6 chapters and 71 entries.
            </p>
            <p className="text-sm text-[#6F655C] italic font-arabic">
              هذه مجرد لمحات قصيرة من الكتاب. النسخة الكاملة تضم 6 أبواب و71 خاطرة.
            </p>
            <div className="pt-4">
              <Button asChild size="lg" className="bg-[#B86161] hover:bg-[#A55353] text-[#FFF8F2]">
                <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">Get the Full Digital Edition — $29.99</a>
              </Button>
              <p className="text-xs text-[#6F655C] font-arabic text-center mt-2" style={{direction: 'rtl'}}>
                احصل على النسخة الكاملة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Strip */}
      <section className="bg-white border-y border-[#D8CDBE] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-2xl mb-2">📖</p>
              <p className="font-semibold text-[#2E2A28] text-sm">Arabic & English</p>
              <p className="text-xs text-[#6F655C] font-arabic mt-1">عربي وإنجليزي</p>
            </div>
            <div>
              <p className="text-2xl mb-2">📚</p>
              <p className="font-semibold text-[#2E2A28] text-sm">6 Chapters</p>
              <p className="text-xs text-[#6F655C] font-arabic mt-1">6 أبواب</p>
            </div>
            <div>
              <p className="text-2xl mb-2">✍️</p>
              <p className="font-semibold text-[#2E2A28] text-sm">71 Entries</p>
              <p className="text-xs text-[#6F655C] font-arabic mt-1">71 خاطرة</p>
            </div>
            <div>
              <p className="text-2xl mb-2">⚡</p>
              <p className="font-semibold text-[#2E2A28] text-sm">Instant PDF Access</p>
              <p className="text-xs text-[#6F655C] font-arabic mt-1">وصول فوري</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#2F435A] text-[#F8F4EC] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold">
            If the sample speaks to you, the full digital edition is available.
          </h2>
          <p className="text-lg text-[#D8CDBE] font-arabic">
            إذا لامستك العينة، فالنسخة الكاملة متاحة.
          </p>

          <div className="pt-4 space-y-4">
            <div>
              <p className="text-4xl font-bold mb-2 text-[#B45B5B]">$29.99</p>
              <p className="text-sm text-[#D8CDBE]">Digital PDF Edition · Arabic & English · Instant Access</p>
            </div>

            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-[#B86161] hover:bg-[#A55353] text-[#FFF8F2]">
                <a href={GUMROAD_URL} target="_blank" rel="noopener noreferrer">Get the Digital Edition — $29.99</a>
              </Button>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-[#D8CDBE]">
                Secure purchase through Gumroad · Instant PDF access
              </p>
              <p className="text-xs text-[#D8CDBE] font-arabic">
                شراء آمن عبر Gumroad · وصول فوري إلى ملف PDF
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D8CDBE] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-[#6F655C]">
            © 2026 Gaza Land. All rights reserved.
          </p>
          <p className="text-xs text-[#6F655C] font-arabic mt-2">
            © 2026 كتاب غزة. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
}
