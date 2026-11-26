export interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
}

export function StepCard({ stepNumber, title, description }: StepCardProps) {
  return (
    <article className="rounded-xl border border-stone-200 bg-white p-6 shadow-xs transition-colors hover:border-stone-300">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-sm font-bold text-amber-900">
        {stepNumber}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-stone-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">
        {description}
      </p>
    </article>
  );
}