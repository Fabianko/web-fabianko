import { ProfessionalExperienceDto } from './ProfessionalExperienceDto';
import { StudyDto } from './StudyDto';
import { skillDto } from './skillDto';

export class cvClassDto {
  lateral1: string;
  lateral2: string;
  lateral1Text: string;
  lateral3:string;
  profession:string;
  title1: string;
  title2: string;
  title3: string;
  experiences: ProfessionalExperienceDto[];
  studiesList: StudyDto[];
  tags: tag[];
  skills: skillDto[];
  lastUpdate: string;
}
export class tag {
  name: string;
  link: string;
}
