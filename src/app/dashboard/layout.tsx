import Link from 'next/link'

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <nav>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/orders">Orders</Link>
        </nav>
            {children}
        </section>
  }