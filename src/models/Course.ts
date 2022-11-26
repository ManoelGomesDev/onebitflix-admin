import { DataTypes, Optional, Model } from 'sequelize';
import { sequelize } from '../database';


export interface Course {
    id: number
    name: string
    synopsis: string
    thumbnailUrl: string
    featured: number
    categoryId: number
}

export interface CategoryCreationAttributes 
    extends Optional<Course, 'id' | 'thumbnailUrl' | 'featured'> {}


export interface CourseInstance 
    extends Model<Course, CategoryCreationAttributes>, Course {}

export const Course = sequelize.define<CourseInstance, Course>('Course', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING
        },
        synopsis: {
          allowNull: false,
          type: DataTypes.TEXT
        },
        thumbnailUrl: {
          type: DataTypes.STRING
        },
        featured: {
          defaultValue: false,
          type: DataTypes.BOOLEAN
        },
        categoryId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: { model: 'categories', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT'
        }
      })