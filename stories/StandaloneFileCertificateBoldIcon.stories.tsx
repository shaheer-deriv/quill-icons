import type { Meta, StoryObj } from '@storybook/react';

import { StandaloneFileCertificateBoldIcon } from '../src/react/Standalone';

const meta = {
  title: 'standalone/StandaloneFileCertificateBoldIcon',
  component: StandaloneFileCertificateBoldIcon,
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
} satisfies Meta<typeof StandaloneFileCertificateBoldIcon>;

export default meta;

type Story = StoryObj<typeof StandaloneFileCertificateBoldIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
