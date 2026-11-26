import { Link } from "react-router";
import { Badge } from "../atoms";

export interface PetCardProps {
  id: string | number;
  imageUrl: string;
  imageAlt?: string;
  species: string;
  size: string;
  name: string;
  breed: string;
  age: string;
  city: string;
  detailsTo?: string;
}

export function PetCard({
  id,
  imageUrl,
  imageAlt,
  species,
  size,
  name,
  breed,
  age,
  city,
  detailsTo,
}: PetCardProps) {
  const targetUrl = detailsTo ?? `/pets/${id}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-stone-200 bg-white shadow-xs transition-shadow hover:shadow-sm">
      <img
        src={imageUrl}
        alt={imageAlt ?? `Foto de ${name}`}
        className="h-48 w-full object-cover"
      />

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="neutral" label={species} />
            <Badge variant="warning" label={size} />
          </div>

          <h3 className="mt-3 text-lg font-semibold text-stone-900">{name}</h3>
          <p className="mt-1 text-sm text-stone-600">
            {breed} • {age}
          </p>
          <p className="mt-1 text-xs font-medium text-stone-500">{city}</p>
        </div>

        <div className="mt-4 border-t border-stone-100 pt-3">
          <Link
            to={targetUrl}
            className="inline-flex items-center text-sm font-semibold text-emerald-900 transition-colors hover:text-emerald-700"
          >
            Detalhes →
          </Link>
        </div>
      </div>
    </article>
  );
}