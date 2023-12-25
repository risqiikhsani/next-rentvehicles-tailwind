import Script from 'next/script'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    const client_key = process.env.MIDTRANS_CLIENT_KEY
    return (
        <>
            <Script 
            type="text/javascript"
                src="https://app.sandbox.midtrans.com/snap/snap.js"
                data-client-key={client_key} />
            <section>{children}</section>
        </>
    )
}