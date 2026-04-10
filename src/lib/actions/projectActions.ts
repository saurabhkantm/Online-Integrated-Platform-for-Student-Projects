'use server';

import { revalidatePath } from 'next/cache';

export async function submitProject(formData: FormData) {
  // Simulate a delay for the server response
  await new Promise(resolve => setTimeout(resolve, 1500));

  const title = formData.get('title');
  const university = formData.get('university');
  
  console.log(`Submitting project: ${title} from ${university}`);

  // In a real implementation, we would use Prisma/Database here
  // const project = await prisma.project.create({ data: { ... } });

  // Simulate a plagiarism check
  const similarityScore = Math.floor(Math.random() * 15); // Mocked low score

  revalidatePath('/');
  revalidatePath('/explore');

  return { 
    success: true, 
    similarityScore,
    message: 'Project submitted successfully for verification.' 
  };
}

export async function getProjects(filters: any) {
  // Mock function to simulate filtered project retrieval
  return []; // In real app, would be prisma.project.findMany(...)
}
