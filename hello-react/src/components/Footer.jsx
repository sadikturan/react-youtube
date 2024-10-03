export default function Footer() {

    const simdi = new Date().getHours();
    const acilisZaman = 10;
    const kapanisZaman = 23;

    const isOpen = simdi >= acilisZaman && simdi <= kapanisZaman;

    console.log(isOpen);

    return (
        <footer>
            {
                isOpen ? (
                    <p>Akşam {kapanisZaman}' e kadar sipariş verebilirsiniz.</p>
                ) : (
                    <p>Şu an kapalıyız.</p>
                )
            }
        </footer>
    );
}