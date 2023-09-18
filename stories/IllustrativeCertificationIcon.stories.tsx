import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeCertificationIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeCertificationIcon',
  component: IllustrativeCertificationIcon,
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
} satisfies Meta<typeof IllustrativeCertificationIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeCertificationIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
