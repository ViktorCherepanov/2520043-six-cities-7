import {useState} from 'react';
import PlaceCard, {PlaceCardType} from '../place-card/place-card.tsx';
import {Offer} from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  cardType?: PlaceCardType;
}

function OffersList({offers, cardType = 'cities'}: OffersListProps) {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={setActiveOfferId}
        />
      ))}
    </>
  );
}

export default OffersList;
