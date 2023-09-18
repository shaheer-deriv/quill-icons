import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivSecurityWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivSecurityWhiteIcon',
  component: SubBrandDerivSecurityWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivSecurityWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivSecurityWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
