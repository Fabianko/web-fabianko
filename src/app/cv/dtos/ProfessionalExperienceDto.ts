export class ProfessionalExperienceDto{
  business: string;
  position: string;
  date: string;
  description: string;
  tags: tag[];
  isOpen: boolean;
}

export class tag {
  name: string;
  link: string;
}
