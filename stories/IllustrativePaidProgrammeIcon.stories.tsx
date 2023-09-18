import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativePaidProgrammeIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativePaidProgrammeIcon',
  component: IllustrativePaidProgrammeIcon,
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
} satisfies Meta<typeof IllustrativePaidProgrammeIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativePaidProgrammeIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
