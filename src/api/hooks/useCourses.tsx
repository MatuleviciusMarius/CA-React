import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../fetchers";

export const useCourses = () => {
  const {
    data: courses,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  return { courses, isLoading, error };
};
