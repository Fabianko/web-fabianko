import { ProfessionalExperienceDto } from './ProfessionalExperienceDto';
import { StudyDto } from './StudyDto';

export class cvClassDto {
  lateral1: string;
  lateral2: string;
  lateral1Text: string;
  lateral3:string;
  profession:string;
  title1:string;
  title2:string;
  experiences: ProfessionalExperienceDto[];
  studiesList: StudyDto[];
  tags: tag[];
}
export class tag {
  name: string;
  link: string;
}
