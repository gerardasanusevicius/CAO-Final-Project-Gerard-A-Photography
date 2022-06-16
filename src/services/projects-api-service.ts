import { AxiosError } from 'axios';
import { Project } from '../types';
import ApiService, { formatError } from './api-service';

const fetchProjects = async (): Promise<Project[]> => {
  try {
    const { data } = await ApiService.get<Project[]>('/api/projects');
    return data;
  } catch (err) {
    throw new Error(formatError(err));
  }
};

const deleteProjectById = async (id: string, token: string): Promise<Project> => {
  try {
    const { data } = await ApiService.delete<Project>(`/api/projects/${id}`, {
      headers: {
        Authorization: token,
      },
    });
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
