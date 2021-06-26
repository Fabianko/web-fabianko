export class ProfessionalExperienceDto{
  business: string;
  positions: positionDto[];


  tags: tag[];
  isOpen: boolean;
  isOpenAni: boolean;
}

export class tag {
  name: string;
  link: string;
}

export class positionDto {
  name: string;
  date: string;
  description: string;
}
