import {useState} from 'react';
import PlaceCard from '../place-card/place-card.tsx';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
}

function OffersList({offers}: OffersListProps) {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={setActiveOfferId}
        />
      ))}
    </>
  );
}

export default OffersList;
