export const generateStoryBook = ({
  IconName,
  dirName,
  category,
}: {
  IconName: string;
  dirName: string;
  category: string;
}) => {
  return `
import type { Meta, StoryObj } from '@storybook/react'


import { ${IconName} } from "../src/react/${dirName}";

const meta = {
  title: '${category}/${IconName}',
  component: ${IconName},
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
  
} satisfies Meta<typeof ${IconName}>

export default meta;

type Story = StoryObj<typeof ${IconName}>;

export const Primary: Story = {
  args: {
    iconSize: "2xl",
    fill: "black"
  },
}
`;
};
