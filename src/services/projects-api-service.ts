import { AxiosError } from 'axios';
import { Project } from '../types';
import ApiService from './api-service';

const fetchProjects = async (): Promise<Project[]> => {
  const { data } = await ApiService.get<Project[]>('/projects');
  return data;
};

const deleteProjectById = async (id: string): Promise<Project> => {
  try {
    const { data } = await ApiService.delete<Project>(`/projects/${id}`);
    return data;
  } catch (error) {
    throw new Error((error as AxiosError).message);
  }
};

const ProjectService = {
  fetchProjects,
  deleteProjectById,
};

export default ProjectService;
