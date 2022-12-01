import { episodeResourceFeatures, episodeResourceOptions } from './episode';
import { courseResourceOptions } from './Course';
import { Category, Course, Episode } from './../../models';
import { ResourceWithOptions } from "adminjs";
import { categoryResourceOptions } from './Category';


export const adminJsResources: ResourceWithOptions[] = [
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Course,
        options: courseResourceOptions
    },
    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourceFeatures
    }
]