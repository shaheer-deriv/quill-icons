import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeRealWorldExposureIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeRealWorldExposureIcon',
  component: IllustrativeRealWorldExposureIcon,
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
} satisfies Meta<typeof IllustrativeRealWorldExposureIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeRealWorldExposureIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
