import { StorybookGenerateOptions } from './story.type';

export const generateLogoStorybook = ({
  IconName,
  dirName,
  category,
}: StorybookGenerateOptions) => {
  return `
  import type { Meta, StoryObj } from '@storybook/react'
  
  
  import { ${IconName} } from "../src/react/${dirName}";
  
  const meta = {
    title: '${category}/${IconName}',
    component: ${IconName},
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    
  } satisfies Meta<typeof ${IconName}>
  
  export default meta;
  
  type Story = StoryObj<typeof ${IconName}>;
  
  export const Primary: Story = {
    args: {
      width: "128px",
      height: "128px",
    },
  }
  `;
};
