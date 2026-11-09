import { MessageCircle } from "lucide-react"
import { waLink } from "@/data/site"

export function WhatsAppButton() {
  return (
    <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform hover:scale-110">
      <MessageCircle className="size-7" />
    </a>
  )
}
