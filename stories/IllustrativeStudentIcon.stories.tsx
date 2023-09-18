import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeStudentIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeStudentIcon',
  component: IllustrativeStudentIcon,
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
} satisfies Meta<typeof IllustrativeStudentIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeStudentIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
