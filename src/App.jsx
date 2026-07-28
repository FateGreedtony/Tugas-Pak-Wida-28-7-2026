import {
  FiArrowRight,
  FiCheckCircle,
  FiFacebook,
  FiGlobe,
  FiInstagram,
  FiLinkedin,
  FiLogIn,
  FiLogOut,
  FiMapPin,
  FiMessageCircle,
  FiPhoneCall,
  FiSend,
  FiShield,
  FiStar,
  FiUsers,
} from 'react-icons/fi'
import { useEffect, useState } from 'react'
import './App.css'

const partnerLogos = [
  'Nusantara Tech',
  'Sagara Creative',
  'Bina Inovasi',
  'Mitra Digital',
  'Karya Mandiri',
  'Pilar Solusi',
]

const testimonials = [
  {
    name: 'Alya Putri',
    role: 'Mahasiswa Desain Komunikasi',
    quote:
      'Proses pengajuan terasa jelas, dan saya bisa melihat status kerja sama perusahaan dengan cepat.',
  },
  {
    name: 'Rizky Pratama',
    role: 'Mahasiswa Sistem Informasi',
    quote:
      'Prototype ini sudah enak dipakai sebagai portal awal untuk melihat perusahaan yang sudah acc.',
  },
  {
    name: 'Nabila Siregar',
    role: 'Mahasiswa Administrasi Bisnis',
    quote:
      'Bagian ulasan dan FAQ-nya membuat calon magang lebih yakin sebelum mendaftar.',
  },
]

const proposals = [
  {
    title: 'Ajukan perusahaan',
    description:
      'Isi identitas perusahaan, kontak PIC, bidang kerja, dan kebutuhan peserta magang.',
  },
  {
    title: 'Verifikasi internal',
    description:
      'Tim kampus meninjau dokumen, validasi kebutuhan, dan menandai proposal yang lolos.',
  },
  {
    title: 'Publikasi acc',
    description:
      'Perusahaan yang disetujui otomatis masuk ke daftar mitra yang bisa diakses mahasiswa.',
  },
]

const approvedCompanies = [
  {
    name: 'PT Cakra Data Indonesia',
    field: 'Data & Analytics',
    city: 'Bandung',
  },
  {
    name: 'CV Langit Kreatif',
    field: 'Desain & Multimedia',
    city: 'Surabaya',
  },
  {
    name: 'PT Sinar Solusi Digital',
    field: 'Software Development',
    city: 'Jakarta',
  },
  {
    name: 'UD Harmoni Rekayasa',
    field: 'Teknik & Operasional',
    city: 'Semarang',
  },
]

const faqs = [
  {
    question: 'Apakah login dan logout sudah aktif?',
    answer:
      'Di prototype ini tombol login dan logout masih berupa tampilan awal. Nanti bisa disambungkan ke autentikasi saat backend siap.',
  },
  {
    question: 'Apakah data perusahaan bisa ditambah?',
    answer:
      'Bisa. Struktur halaman ini sudah dibuat supaya mudah dihubungkan ke API atau CMS untuk menambah daftar mitra.',
  },
  {
    question: 'Apakah maps bisa diarahkan ke alamat asli?',
    answer:
      'Bisa, tinggal ganti embed maps ke lokasi kampus atau kantor yang kamu pakai.',
  },
  {
    question: 'Apakah halaman ini mobile friendly?',
    answer:
      'Ya. Layout menggunakan section responsif, grid adaptif, dan komponen yang tetap terbaca di layar kecil.',
  },
]

const socials = [
  { name: 'Instagram', icon: FiInstagram, href: '#' },
  { name: 'Facebook', icon: FiFacebook, href: '#' },
  { name: 'LinkedIn', icon: FiLinkedin, href: '#' },
  { name: 'Website', icon: FiGlobe, href: '#' },
]

function InternshipTrialModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <section
        className="modal-shell"
        role="dialog"
        aria-modal="true"
        aria-labelledby="trial-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-topbar">
          <div>
            <p className="eyebrow">Modal pengajuan</p>
            <h2 id="trial-modal-title">Simulasi pengajuan magang</h2>
          </div>

          <button type="button" className="ghost-button" onClick={onClose}>
            <FiArrowRight /> Tutup
          </button>
        </div>

        <div className="trial-modal-content">
          <section className="trial-summary">
            <div className="trial-summary-header">
              <FiShield />
              <span>Alur cepat</span>
            </div>
            <div className="trial-step">
              <FiUsers />
              <p>Isi data mahasiswa, kampus, dan perusahaan tujuan.</p>
            </div>
            <div className="trial-step">
              <FiCheckCircle />
              <p>Tinjau ringkasan sebelum dikirim sebagai draft.</p>
            </div>
            <div className="trial-step">
              <FiSend />
              <p>Status simulasi akan muncul di halaman ini.</p>
            </div>
          </section>

          <section className="trial-form-section">
            <div className="section-heading">
              <p className="eyebrow">Form pengajuan</p>
              <h3>Isi data percobaan pengajuan magang</h3>
            </div>

            <div className="trial-grid">
              <form className="trial-form">
                <label>
                  Nama mahasiswa
                  <input type="text" placeholder="Contoh: Alya Putri" />
                </label>
                <label>
                  Program studi
                  <input type="text" placeholder="Contoh: Sistem Informasi" />
                </label>
                <label>
                  Perusahaan tujuan
                  <input type="text" placeholder="Contoh: PT Sinar Solusi Digital" />
                </label>
                <label>
                  Durasi magang
                  <input type="text" placeholder="Contoh: 3 bulan" />
                </label>
                <label>
                  Catatan singkat
                  <textarea
                    rows="5"
                    placeholder="Tulis minat bidang, waktu magang, atau kebutuhan khusus"
                  />
                </label>

                <div className="hero-actions">
                  <button type="button" className="solid-button">
                    <FiSend /> Simpan draft pengajuan
                  </button>
                  <button type="button" className="ghost-button" onClick={onClose}>
                    <FiArrowRight /> Kembali ke beranda
                  </button>
                </div>
              </form>

              <aside className="trial-preview">
                <p className="eyebrow">Preview</p>
                <h4>Status simulasi</h4>
                <div className="preview-card">
                  <span className="preview-badge">Draft</span>
                  <strong>Menunggu validasi</strong>
                  <p>
                    Setelah disambungkan ke backend, data ini bisa dikirim ke admin
                    atau dosen pembimbing untuk dicek.
                  </p>
                </div>
                <div className="preview-card muted">
                  <strong>Yang akan tersimpan</strong>
                  <p>Data mahasiswa, tujuan perusahaan, durasi, dan catatan.</p>
                </div>
              </aside>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

function App() {
  const [isTrialOpen, setIsTrialOpen] = useState(false)

  return (
    <div className="app-shell">
      <InternshipTrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
      />

      <header className="topbar">
        <div className="brand-lockup">
          <div className="brand-mark">IM</div>
          <div>
            <p className="eyebrow">Prototype website magang</p>
            <h1>Inkubator Mitra Magang</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Navigasi utama">
          <a href="#header">Header</a>
          <a href="#logos">Rekanan</a>
          <a href="#reviews">Ulasan</a>
          <a href="#proposal">Pengajuan</a>
          <a href="#approved">ACC</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="auth-actions">
          <button
            type="button"
            className="ghost-button"
            onClick={() => setIsTrialOpen(true)}
          >
            <FiArrowRight /> Coba ajukan magang
          </button>
          <button type="button" className="ghost-button">
            <FiLogIn /> Login
          </button>
          <button type="button" className="solid-button">
            <FiLogOut /> Logout
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="header">
          <div className="hero-copy">
            <p className="eyebrow">Landing page magang</p>
            <h2>
              Satu pintu untuk melihat mitra, mengajukan perusahaan, dan memantau
              status kerja sama.
            </h2>
            <p className="hero-text">
              Prototype ini merangkum alur utama website magang: identitas
              perusahaan rekanan, ulasan mahasiswa, pengajuan mitra, daftar ACC,
              sampai FAQ dan kontak.
            </p>

            <div className="hero-actions">
              <a className="ghost-link" href="#approved">
                Lihat perusahaan ACC
              </a>
              <button
                type="button"
                className="solid-button"
                onClick={() => setIsTrialOpen(true)}
              >
                <FiArrowRight /> Buka modal pengajuan
              </button>
            </div>

            <div className="hero-stats">
              <article>
                <strong>28+</strong>
                <span>Perusahaan rekanan</span>
              </article>
              <article>
                <strong>120</strong>
                <span>Mahasiswa aktif</span>
              </article>
              <article>
                <strong>4.9/5</strong>
                <span>Rata-rata ulasan</span>
              </article>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-panel-header">
              <span>Quick index</span>
              <FiShield />
            </div>
            <ul>
              <li>
                <FiUsers /> Login mahasiswa dan admin
              </li>
              <li>
                <FiCheckCircle /> Monitoring pengajuan perusahaan
              </li>
              <li>
                <FiSend /> Daftar mitra yang sudah di ACC
              </li>
            </ul>
            <div className="hero-note">
              <FiMessageCircle />
              <p>
                Bagian “index” di pesanmu terpotong, jadi halaman ini dibuat
                sebagai struktur prototype yang siap dilanjutkan.
              </p>
            </div>
          </aside>
        </section>

        <section className="section-block" id="logos">
          <div className="section-heading">
            <p className="eyebrow">Logo rekanan perusahaan</p>
            <h3>Daftar mitra yang tampil sebagai identitas visual</h3>
          </div>

          <div className="logo-grid">
            {partnerLogos.map((logo) => (
              <article key={logo} className="logo-card">
                <span>{logo.slice(0, 2).toUpperCase()}</span>
                <p>{logo}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="reviews">
          <div className="section-heading">
            <p className="eyebrow">Ulasan murid magang</p>
            <h3>Testimoni singkat untuk membangun kepercayaan</h3>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <div className="stars" aria-hidden="true">
                  <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
                </div>
                <p>{item.quote}</p>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block proposal-section" id="proposal">
          <div className="section-heading">
            <p className="eyebrow">Pengajuan perusahaan</p>
            <h3>Alur sederhana untuk mengusulkan mitra baru</h3>
          </div>

          <div className="proposal-grid">
            {proposals.map((item, index) => (
              <article key={item.title} className="proposal-card">
                <span className="step-number">0{index + 1}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="approved">
          <div className="section-heading">
            <p className="eyebrow">Daftar perusahaan yang di ACC</p>
            <h3>Perusahaan yang lolos verifikasi dan siap dipilih mahasiswa</h3>
          </div>

          <div className="company-grid">
            {approvedCompanies.map((company) => (
              <article key={company.name} className="company-card">
                <div className="company-badge">ACC</div>
                <h4>{company.name}</h4>
                <p>{company.field}</p>
                <span>{company.city}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="quote-banner">
          <p>
            “Kerja magang yang baik dimulai dari proses yang jelas, mitra yang
            tepat, dan informasi yang terbuka.”
          </p>
        </section>

        <section className="section-block faq-section" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h3>Pertanyaan yang paling sering muncul</h3>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-item">
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand-mark">IM</div>
          <p>
            Prototype website magang untuk menampilkan rekanan perusahaan,
            pengajuan, dan informasi mahasiswa.
          </p>
        </div>

        <div className="footer-column">
          <h4>Alamat</h4>
          <p>Jl. Pendidikan No. 12, Kota Magang, Indonesia</p>
          <p>
            <FiPhoneCall /> +62 812-3456-7890
          </p>
          <p>
            <FiMapPin /> Gedung Administrasi Magang
          </p>
        </div>

        <div className="footer-column footer-map">
          <h4>Maps</h4>
          <iframe
            title="Lokasi kantor magang"
            src="https://www.google.com/maps?q=Bandung&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="footer-column">
          <h4>Social media</h4>
          <div className="social-links">
            {socials.map(({ name, icon: Icon, href }) => (
              <a key={name} href={href} aria-label={name}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
