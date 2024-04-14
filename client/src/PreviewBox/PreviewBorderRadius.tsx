interface PreviewBorderProps {
    borderRadius: string;
    border: string;
    backgroundColor: string;
}

export default function PreviewBorderRadius({
    borderRadius,
    border,
    backgroundColor,
}: PreviewBorderProps) {
    return (
        <div
        className="w-[300px] h-[300px] mx-auto overflow-visible"
        style={{ borderRadius, border, backgroundColor }}
        >
        </div>
    );
}
  