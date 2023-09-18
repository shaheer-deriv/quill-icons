import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeProfessionalGuidanceIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeProfessionalGuidanceIcon',
  component: IllustrativeProfessionalGuidanceIcon,
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
} satisfies Meta<typeof IllustrativeProfessionalGuidanceIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeProfessionalGuidanceIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
