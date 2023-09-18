import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCompetenceIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCompetenceIcon',
  component: IllustrativeCompetenceIcon,
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
} satisfies Meta<typeof IllustrativeCompetenceIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCompetenceIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
