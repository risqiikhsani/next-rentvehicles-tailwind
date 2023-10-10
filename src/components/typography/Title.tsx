export default function Title({ title, text }: { title: string; text?: string }) {
    return (
      <>
        <h1 className="font-bold text-2xl">{title}</h1>
        {text && <h4>{text}</h4>}
      </>
    );
  }
  