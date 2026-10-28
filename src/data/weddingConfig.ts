/**
 * Wedding Invitation Configuration Data for Karishma Weds Mohit
 * Exactly following the structure of the reference website neha-pratik.surge.sh
 */

export interface CeremonyEvent {
  id: string;
  title: string;
  date: string;
  icon: 'ring' | 'wedding';
  iconType?: 'ring' | 'wedding';
  description?: string;
}

export type TimelineItem = CeremonyEvent;

export interface WeddingConfig {
  couple: {
    bride: string;
    groom: string;
    initials: string;
    namesDisplay: string;
    status: string;
    blessing: string;
    quote: string;
  };
  event: {
    ringCeremonyDate: string;
    weddingDate: string;
    displayDate: string;
    venueName: string;
    venueAddress: string;
    locality: string;
    city: string;
    mapsQuery: string;
    year: string;
  };
  timeline: TimelineItem[];
  dressCode: {
    title: string;
    description: string;
  };
  giftPreference: {
    title: string;
    description: string;
  };
  invitationMessage: {
    greeting: string;
    main: string;
    closing: string;
  };
}

export const weddingData: WeddingConfig = {
  couple: {
    bride: 'Karishma Puri',
    groom: 'Mohit Bhardwaj',
    initials: 'K & M',
    namesDisplay: 'Karishma Puri Weds Mohit Bhardwaj',
    status: 'Karishma Weds Mohit',
    blessing: 'With the blessings of our families, we invite you to celebrate the beginning of a beautiful new chapter.',
    quote: 'Two hearts, one promise, a lifetime of togetherness.',
  },
  event: {
    ringCeremonyDate: '1 December',
    weddingDate: '28 December',
    displayDate: '1 December & 28 December',
    venueName: 'Starland',
    venueAddress: 'Starland, GT Karnal Road',
    locality: 'GT Karnal Road',
    city: 'Delhi NCR',
    mapsQuery: 'Starland+GT+Karnal+Road',
    year: '', // Configurable year
  },
  timeline: [
    {
      id: 'ring-ceremony',
      title: 'RING CEREMONY',
      date: '1 December',
      icon: 'ring',
      iconType: 'ring',
      description: 'Exchange of rings celebrating love & eternal promise.',
    },
    {
      id: 'the-wedding',
      title: 'THE WEDDING',
      date: '28 December',
      icon: 'wedding',
      iconType: 'wedding',
      description: 'Sacred wedding rituals, pheras & auspicious blessings.',
    },
  ],
  dressCode: {
    title: 'Dress Code',
    description: 'Gentlemen are requested to wear formal attire, while ladies are invited to grace the occasion in elegant ethnic wear.',
  },
  giftPreference: {
    title: 'Gift Preference',
    description: 'Your presence and blessings mean the world to us and are our greatest gift.',
  },
  invitationMessage: {
    greeting: 'With love and blessings',
    main: 'Together with our families, we invite you to join us in celebrating a beautiful beginning filled with love, happiness and togetherness.',
    closing: 'Your presence will make our celebration even more special.',
  },
};

// Aliases for compatibility
export const weddingConfig = {
  ...weddingData,
  bride: {
    fullName: weddingData.couple.bride,
    firstName: 'Karishma',
    lastName: 'Puri',
  },
  groom: {
    fullName: weddingData.couple.groom,
    firstName: 'Mohit',
    lastName: 'Bhardwaj',
  },
  monogram: {
    initials: weddingData.couple.initials,
    brideInitial: 'K',
    groomInitial: 'M',
  },
  year: weddingData.event.year,
  headline: weddingData.couple.namesDisplay,
  wording: {
    envelopePrompt: 'Tap to open your invitation',
    openActionLabel: 'Open Invitation',
    greeting: weddingData.invitationMessage.greeting,
    connective: 'Weds',
    mainMessage: weddingData.invitationMessage.main,
    closingMessage: weddingData.couple.blessing,
    venueHeader: 'THE VENUE',
    replayActionLabel: 'View invitation again',
  },
  events: weddingData.timeline,
  venue: {
    name: weddingData.event.venueName,
    locality: weddingData.event.locality,
  },
};
